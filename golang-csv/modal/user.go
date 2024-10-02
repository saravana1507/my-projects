package modal

type Responder interface{}

type FullDetails struct {
	Id          int    `gorm:"type: integer; PRIMARY_KEY" json:"id`
	Firstname   string `gorm:"type: varchar(50)" json:"firstname"`
	Lastname    string `gorm:"type: varchar(50)" json:"lastname"`
	Email       string `gorm:"type: varchar(50);unique;notnull " json:"email"`
	Phonenumber int    `gorm:"type: integer" json:"phonenumber"`
	Password    string `gorm:"type: varchar(50)" json:"password"`
}
type EmployeeDetails struct {
	Id          int    `gorm:"type: integer; PRIMARY_KEY" json:"id"`
	Name        string `gorm:"type: varchar(50)" json:"name"`
	Email       string `gorm:"type: varchar(50);unique;notnull" json:"email`
	Phonenumber int    `gorm:"type: integer" json:"phonenumber"`
}
type ManagerDetails struct {
	Id          int    `gorm:"type: integer; PRIMARY_KEY" json:"id"`
	Name        string `gorm:"type: varchar(50)" json:"name"`
	Email       string `gorm:"type: varchar(50);unique;notnull" json:"email"`
	Phonenumber int    `gorm:"type: integer" json:"phonenumber"`
}
