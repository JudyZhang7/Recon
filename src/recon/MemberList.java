package recon;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

public class MemberList implements Serializable{
	private List <Member> _memberList;
	public MemberList() {
		_memberList = new ArrayList<Member>();
	}
	public void printMembers() {
		for(Member member : _memberList) {
			System.out.println(member.get_name());
		}
	}
	
	public void addMember(String name, String character, String imageURL, String description) {
		Member newMember = new Member(name, character, description, imageURL);
		_memberList.add(newMember);
	}
	
	public List<Member> get_memberList() {
		return _memberList;
	}
	public void set_memberList(List<Member> _memberList) {
		this._memberList = _memberList;
	}
	public void instant(MemberList ML) {
		ML.addMember("Ana Ming Bostwick-Singer", "Jodie", "/Recon/src/srcimg/Bastwick-Singer_Ana_Ming.png", "[Insert description here]");
		ML.addMember("Victoria Ortiz", "Ren", "/Recon/src/srcimg/Ortiz_Victoria.png", "[Insert description here]");
		ML.addMember("Jore Aaron", "Taylor", "/Recon/src/srcimg/Aaron_Jore.png", "[Insert description here]");
		ML.addMember("KatieMichal Pullen", "Riley", "/Recon/src/srcimg/Pullen_KatieMichal.png", "[Insert description here]");
		ML.addMember("Kat Wells", "Jones", "/Recon/src/srcimg/Wells_Kat.png", "[Insert description here]");
	}
}