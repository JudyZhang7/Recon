package recon;

import java.io.Serializable;

public class Member implements Serializable{
	private String _name;
	private String _character;
	private String _description;
	private String _imageURL;
	
	public Member(String name, String character, String description, String imageURL){
		_name = name;
		_character = character;
		_description = description;
		_imageURL = imageURL;
	}
	//getters and setters===========================================
	public String get_name() {
		return _name;
	}
	public void set_name(String _name) {
		this._name = _name;
	}
	public String get_description() {
		return _description;
	}
	public void set_description(String _description) {
		this._description = _description;
	}
	public String get_imageURL() {
		return _imageURL;
	}
	public void set_imageURL(String _imageURL) {
		this._imageURL = _imageURL;
	}
	public String get_character() {
		return _character;
	}
	public void set_character(String _character) {
		this._character = _character;
	}
	
	//getters and setters===========================================
}
