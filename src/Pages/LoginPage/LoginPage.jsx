import React, { useState } from 'react'
import style from './LoginPage.module.scss'
import { Button } from '../../Components/Button/Button'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContextProvider'

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)

  const [method, setMethod] = useState(true)

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const [newInfo, setNewInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    active: 1,
    org_id: 1,
    refresh_token: '1234',
    groups: 1
  })

  const handleLogin = () => {
    console.log(name, pass)

    const body = new URLSearchParams()

    body.append("username", name)
    body.append("password", pass)

    const options = {
      method: "POST",
      body: body
    }

    fetch('http://localhost:4000/login', options)
      .then((res => res.json()))
      .then((data) => setUser({ firstname: data.user.firstname, lastname: data.user.lastname }))

  }

  const handleSignup = () => {
    console.log(newInfo);
    const body = new URLSearchParams()

    body.append("firstname", newInfo.firstname)
    body.append("lastname", newInfo.lastname)
    body.append("email", newInfo.email)
    body.append("password", newInfo.password)
    body.append("active", newInfo.active)
    body.append("org_id", newInfo.org_id)
    body.append("refresh_token", newInfo.refresh_token)
    body.append("groups", newInfo.groups)


    const options = {
      method: "POST",
      body: body
    }

    fetch('http://localhost:4000/users', options)
      .then((res => console.log(res)))

  }

  return (
    <>
      <div className={style.wrapper}>

        <h2>Login</h2>
        <p>Indtast dit brugernavn og adgangskode for at logge ind</p>

        {user ?
          <>
            du er logget ind som {user.firstname}
            <Button onClick={() => setUser(null)}>Log ud</Button>
          </>
          :
          <>
            {method ?
              <>
                <form>
                  <input type="text" placeholder='Brugernavn (email)' value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="password" placeholder='Adgangskode' value={pass} onChange={(e) => setPass(e.target.value)} />
                </form>
                <div className={style.buttons}>
                  <Button onClick={() => handleLogin()}>Log ind</Button>
                  <Button>Annuller</Button>
                  <Button onClick={() => setMethod(!method)}>Ny bruger</Button>
                </div>
              </>
              :
              <>
                <form>
                  <input type="text" placeholder='Firstname' value={newInfo.firstname} onChange={(e) => setNewInfo({ ...newInfo, firstname: e.target.value })} />
                  <input type="text" placeholder='Lastname' value={newInfo.lastname} onChange={(e) => setNewInfo({ ...newInfo, lastname: e.target.value })} />
                  <input type="text" placeholder='Email' value={newInfo.email} onChange={(e) => setNewInfo({ ...newInfo, email: e.target.value })} />
                  <input type="password" placeholder='Password' value={newInfo.password} onChange={(e) => setNewInfo({ ...newInfo, password: e.target.value })} />
                </form>
                <div className={style.buttons}>
                  <Button onClick={() => handleSignup()}>Opret</Button>
                  <Button>Annuller</Button>
                  <Button onClick={() => setMethod(!method)}>Eksisterende bruger</Button>
                </div>
              </>
            }
          </>
        }





      </div>
    </>
  )
}
