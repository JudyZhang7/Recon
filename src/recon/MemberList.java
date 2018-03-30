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
	
	public List<Member> get_memberList() {
		return _memberList;
	}
	public void set_memberList(List<Member> _memberList) {
		this._memberList = _memberList;
	}
}