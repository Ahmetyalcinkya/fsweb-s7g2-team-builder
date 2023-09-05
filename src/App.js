import "./App.css";
import { Switch } from "react-router-dom";
import { Route, useHistory } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MembersPage from "./Components/MembersPage";
import MemberForm from "./Components/MemberForm";
import { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function App() {
  const teamMembers = [
    {
      name: "Ahmet Can",
      surname: "Yalçınkaya",
      role: "Full Stack Developer",
      email: "ahmetcan.yalcinkaya55@gmail.com",
      img: "",
    },
    {
      name: "Salen",
      surname: "Teke",
      role: "Mobil Uygulama Geliştirici",
      email: "salen.teke09@gmail.com",
      img: "",
    },
    {
      name: "Mehmet",
      surname: "Yılmaz",
      role: "Frontend Developer",
      email: "mehmet.yilmaz@gmail.com",
      img: "",
    },
    {
      name: "Zeynep",
      surname: "Şahin",
      role: "Backend Developer",
      email: "zeynep.sahin@gmail.com",
      img: "",
    },
    {
      name: "Eren",
      surname: "Çelik",
      role: "Veri Analisti",
      email: "eren.celik@gmail.com",
      img: "",
    },
    {
      name: "Ali",
      surname: "Aksoy",
      role: "UI/UX Designer",
      email: "ali.aksoy@gmail.com",
      img: "",
    },
    {
      name: "Selin",
      surname: "Aslan",
      role: "Test Mühendisi",
      email: "selin.aslan@gmail.com",
      img: "",
    },
    {
      name: "Ayşe",
      surname: "Yıldırım",
      role: "Yazılım Geliştirici",
      email: "ayse.yildirim@gmail.com",
      img: "",
    },
    {
      name: "Mustafa",
      surname: "Demir",
      role: "Sistem Mühendisi",
      email: "mustafa.demir@gmail.com",
      img: "",
    },
    {
      name: "Fatma",
      surname: "Koç",
      role: "DevOps Mühendisi",
      email: "fatma.koc@gmail.com",
      img: "",
    },
  ];
  const teamMembersInitial = {
    name: "",
    surname: "",
    role: "",
    email: "",
  };
  const [formData, setFormData] = useState(teamMembersInitial);
  const [memberData, setMemberData] = useState(teamMembers);

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.id) {
      let updatedMember = memberData.map((member) => {
        if (member.id === formData.id) {
          return formData;
        } else {
          return member;
        }
      });
      setMemberData(updatedMember);
    } else {
      const newMember = {
        ...formData,
        ["img"]: "",
        ["id"]: memberData[memberData.length - 1].id + 1,
      };
      setMemberData([...memberData, newMember]);
    }
    setFormData(teamMembersInitial);
    history.push("/members");
  };

  const changeHandler = (e) => {
    const { value, name, type, checked } = e.target;
    value = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };

  const editMember = (member) => {
    setFormData(member);
    history.push("/add-member");
  };
  return (
    <div className="App">
      <header>
        <h1>ŞİRKET ADI</h1>
        <Nav justified>
          <NavItem>
            <NavLink active href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#footer">
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/members">Members Page</NavLink>
          </NavItem>
        </Nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/members" exact>
          <MembersPage memberData={memberData} editMember={editMember} />
        </Route>
        <Route path="/add-member" exact>
          <MemberForm
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
          />
        </Route>
      </Switch>
      <footer>
        <h1>ŞİRKET ADI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          distinctio pariatur corporis esse placeat at culpa ad provident
          obcaecati corrupti recusandae vel deserunt, voluptate iusto impedit
          aspernatur sequi aperiam, ab quis ea vitae reprehenderit? Quaerat
          harum optio placeat similique in? Eos tempore fugit placeat quae harum
          atque, optio cum debitis.
        </p>
      </footer>
    </div>
  );
}

export default App;
