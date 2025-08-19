extends Node2D

var planets = []

func _ready():
	$Control/GoBackButton.pressed.connect(_on_second_button_pressed)
	# Initiate planets:
	var speed = 0.4
	var scale = 2
	var window_size = get_viewport().size
	
	var sun = Planet.new("sun", scale*10,Color.CORAL, 0, Vector2(window_size.x / 2, window_size.y / 2 + 75), null, "res://textures/sol.png")
	add_child(sun)
	planets.append(sun)
	
	var netup = Planet.new("netup", scale*9, Color.DARK_RED, speed * 1, scale*Vector2(200, 0), sun, "res://textures/neptun.png")
	add_child(netup)
	planets.append(netup)
	
	var earth = Planet.new("earth", scale*8, Color.AQUA, speed * 2, scale*Vector2(100, 0), sun, "res://textures/jord.png")
	add_child(earth)
	planets.append(earth)
	
	var moon = Planet.new("moon", scale*5, Color.GRAY, speed * 5, scale*Vector2(50,0), earth, "res://textures/moon.png")
	add_child(moon)
	planets.append(moon)
	
	var moon_moon = Planet.new("moonmoon", scale*3, Color.ALICE_BLUE, speed * 10, scale*Vector2(30, 0), moon)
	add_child(moon_moon)
	planets.append(moon_moon)
	
func update(delta: float) -> void:
	for p in planets:
		p.update_planet(delta)

func _process(delta: float) -> void:
	update(delta)

func _on_second_button_pressed():
	get_tree().change_scene_to_file("res://scenes/main/main.tscn")
