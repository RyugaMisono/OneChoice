package model

import (
	"github.com/google/uuid"
	_ "gorm.io/gorm"
)

type User struct {
	ID       uuid.UUID
	Name     string
	Email    string
	Country  string
	Duration string
	Category string
	Question string
}

// DBにuserを追加
func AddUser(name, email, country, duration, category, question string) (*User, error) {

	// 新たなuuidを生成
	id, err := uuid.NewUUID()
	if err != nil {
		return nil, err
	}

	// User型のuserを定義
	user := User{
		ID:       id,
		Name:     name,
		Email:    email,
		Country:  country,
		Duration: duration,
		Category: category,
		Question: question,
	}

	// userをDBのUserテーブルに追加
	err = db.Create(&user).Error

	// userのポインタ と errを返す
	return &user, err
}
