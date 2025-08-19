extends Node2D

func _ready():
	$Control/NextSceneButton.pressed.connect(_on_play_button_pressed)

func _on_play_button_pressed():
	get_tree().change_scene_to_file("res://scenes/second/second.tscn")
