package vn.project.dto.request;

public class SignUpForm {
    private String userName;
    private String userFullName;
    private String userPassword;
    private String userEmail;

    public SignUpForm() {
    }

    public SignUpForm(String userName, String userFullName, String userPassword, String userEmail) {
        this.userName = userName;
        this.userFullName = userFullName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserFullName() {
        return userFullName;
    }

    public void setUserFullName(String userFullName) {
        this.userFullName = userFullName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}
