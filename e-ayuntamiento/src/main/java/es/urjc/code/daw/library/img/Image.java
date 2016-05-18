package es.urjc.code.daw.library.img;


public class Image {
	
	private String name;
	private String filePath;
	
	
	public Image() {}

	public Image(String name, String filePath) {
		super();
		this.name = name;
		this.filePath = filePath;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	@Override
	public String toString() {
		return "Image [name=" + name + ", filePath=" + filePath + "]";
	}


		
}
