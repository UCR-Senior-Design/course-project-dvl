import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewResumeForm from './NewResumeForm'

const NewResume = () => {
    const users = useSelector(selectAllUsers)

    if (!users?.length) return <p>Not Currently Available</p>

    const content = users ? <NewResumeForm users={users} /> : <p>Loading...</p>

    return content
}
export default NewResume