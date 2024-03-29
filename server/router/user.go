package router

import (
	"net/http"
	"onechoice/model"

	"github.com/labstack/echo/v4"
)

// ReqUser型は文字列のNameをパラメーターとして持つ
type ReqUser struct {
	Name     string `json:"name"`
	Address  string `json:"address"`
	Country  string `json:"country"`
	Category string `json:"category"`
	Question string `json:"question"`
}

// 追加したuserをjsonで返す
func AddUserHandler(c echo.Context) error {

	// 空のReqUserであるreqを定義
	var req ReqUser

	// bodyのjsonファイルをbind
	// bind: DBやHTTPリクエストのデータをGoの構造体(今回はreq)に対応付け
	err := c.Bind(&req)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Bad Request")
	}

	// modelのAddUser関数を実行
	user, err := model.AddUser(req.Name, req.Address, req.Country, req.Category, req.Question)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Bad Request")
	}

	// StastsOK と 追加されたuserを返す
	return c.JSON(http.StatusOK, user)
}
