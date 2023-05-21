import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type User = {
	username: string
	password: string
}

const userList: User[] = [
	{
		username: 'Admin',
		password: 'Admin123',
	},
	{
		username: 'Pedro',
		password: 'BatatinhaFrita123',
	},
	{
		username: 'Ariadne',
		password: '#VoaEx',
	},
	{
		username: 'Manel',
		password: 'LOLéIncrivel',
	},
]

const isUserInList = (userlist: User[], username: string) => {
	return userlist.some((item) => item.username === username)
}

const isValidPassword = (userlist: User[], username: string, password: string) => {
	const [user] = userlist.filter((item) => item.username === username)
	return user.password === password
}

const Login: NextPage = () => {
	const router = useRouter()
	const [registeredUsers, setRegisteredUsers] = useState<User[]>([])
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		setRegisteredUsers(userList)
	})

	const handleLogin = () => {
		if (!username || !password) {
			setError('Digite o usuário e a senha')
			return
		}

		if (!isUserInList(registeredUsers, username)) {
			setError('Usuário não encontrado')
			return
		}

		if (!isValidPassword(registeredUsers, username, password)) {
			setError('Senha incorreta')
			return
		}

		router.push({ pathname: '/movies', query: { username } })
		setError('')
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-zinc-900 p-10">
			<h1 className="text-3xl text-gray-100 font-semibold mb-5">Login</h1>

			<div className="flex flex-col items-center bg-red-600 p-5 border-0 rounded-lg space-y-4 shadow-md w-1/3">
				<input
					className="bg-slate-100 border-0 rounded-md p-3 font-semibold w-full"
					type="text"
					placeholder="Usuário"
					onChange={(e) => setUsername(e.target.value)}
				/>

				<input
					className="bg-slate-100 border-0 rounded-md p-3 font-semibold w-full"
					type="password"
					placeholder="Senha"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<h2 className="text-red-500 text-lg font-semibold">{error}</h2>

				<button
					className="bg-slate-100 border-0 rounded-lg
                        text-xl font-semibold
                        p-4 w-3/4
                        shadow-md
                        hover:bg-red-200
                        transition-all"
					onClick={handleLogin}>
					Entrar
				</button>
			</div>
		</div>
	)
}

export default Login
