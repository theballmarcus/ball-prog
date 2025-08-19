extends Sprite2D
class_name Planet

var parent_planet: Planet
var size: float
var color: Color
var angle_speed: float
var position_tree: Vector2
var _name: String
var _running: bool
var _offset: Vector2
var sprite: Sprite2D
var _texture: String

func _init(name: String, size: float, color: Color, angle_speed: float = 0, init_pos: Vector2 = Vector2(0,0), parent_planet: Planet = null, texture: String = ""):
	self._name = name
	self.size = size
	self.color = color
	self._offset = Vector2(init_pos)
	self.position = Vector2(init_pos)
	self.angle_speed = angle_speed
	self._running = true
	
	self._texture = texture
	if texture != "":
		self.texture = load(texture)
		self.scale.x = size / self.texture.get_width()
		self.scale.y = self.scale.x
		self.sprite = Sprite2D.new()
		self.sprite.texture = self.texture
		self.sprite.centered = true
		add_child(self.sprite)
	
	var collision = CollisionShape2D.new()
	var circle = CircleShape2D.new()
	circle.radius = size
	collision.shape = circle
	add_child(collision)

	if parent_planet:
		self.parent_planet = parent_planet
		self.position_tree = self.parent_planet.position_tree + self.parent_planet.position
	else:
		self.position_tree = Vector2(0,0)
		
	set_process_input(true)

func update_planet(delta: float) -> void:
	# Here you can put movement or simulation logic
	if self._running == true:
		self._offset = self._offset.rotated(delta * self.angle_speed)

	if self.parent_planet:
		self.position_tree = self.parent_planet.position + self._offset
		self.position = self.position_tree
		
	queue_redraw()

func _draw() -> void:	
	if not self._texture:
		draw_circle(Vector2.ZERO, size, color)

func _input_event(viewport, event, shape_idx):
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
		self._running = !self._running
