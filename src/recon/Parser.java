package recon;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonParseException;

public class Parser {
	private static MemberList _memberList;
	private String path = "Members.json";
	
	public Parser() {
		_memberList = new MemberList();
		_memberList.instant(_memberList);
	}
	
	public void readFile()
	{
		BufferedReader reader = null;
        try
        {
        		System.out.println("Filepath:" + path);
            reader = new BufferedReader(new FileReader(path));
            Gson gson = new GsonBuilder().create();
            _memberList = gson.fromJson(reader, MemberList.class);
        } catch (FileNotFoundException e) 
        {
            System.out.println("File not found.");
        } catch (JsonParseException jpe)
        {
            System.out.println("Json file has incorrect format and cannot be parsed.");
        }
        _memberList.printMembers();
	}
	public void writeFile()
	{
		System.out.println("Writing to file...:");
		_memberList.printMembers();
		System.out.println(path);
		try(Writer writer = new FileWriter(path))
		{
			Gson gson = new GsonBuilder().create();
			gson.toJson(_memberList, writer);
			System.out.println("Success in writing to file!");
		} catch (IOException e) {
			System.out.println("Incorrect file name.");
		}
	}
	public List<Member> getMembers(){
		return _memberList.get_memberList();
	}
	public static void main(String [] args) {
		//Adding members take parameters (String name, String character, String imageURL, String description)
		Parser p = new Parser();
		p.writeFile();
	}
}
