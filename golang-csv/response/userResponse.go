package response

type Responder interface{}
type UserResponce struct {
	Id          int    `json:"id"`
	Firstname   string `json:"firstname"`
	Lastname    string `json:"lastname"`
	Email       string `json:"email"`
	Phonenumber int    `json:"phonenumber"`
	Password    string `json:"password"`
}
type EmployeeResponce struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Email       string `json:"email"`
	Phonenumber int    `json:"phonenumber"`
}
type ManagerResponce struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Email       string `json:"email"`
	Phonenumber int    `json:"phonenumber"`
}

var Data map[int]Responder
