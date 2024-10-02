package response

type UserResponce struct {
	Id          int    `json:"id"`
	Firstname   string `json:"firstname"`
	Lastname    string `json:"lastname"`
	Email       string `json:"email"`
	Phonenumber int    `json:"phonenumber"`
	Password    string `json:"password"`
}
