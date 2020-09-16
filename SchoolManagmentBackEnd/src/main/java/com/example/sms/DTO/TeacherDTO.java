package com.example.sms.DTO;

import java.io.Serializable;
import java.util.Date;

public class TeacherDTO implements Serializable {

    private String firstName;
    private String lastName;
    private String email;
    private Date dob;
    private String address;
    private byte[] profilePicture;
    private String gender;
    private String qualification;

    public TeacherDTO() {
    }

    public TeacherDTO(String firstName, String lastName, String email, Date dob, String address, byte[] profilePicture, String gender, String qualification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.address = address;
        this.profilePicture = profilePicture;
        this.gender = gender;
        this.qualification = qualification;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public byte[] getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(byte[] profilePicture) {
        this.profilePicture = profilePicture;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }
}
