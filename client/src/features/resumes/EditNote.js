import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectResumeById } from './resumesApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditResumeForm from './EditResumeForm'

const EditResume = () => {
    const { id } = useParams()

    const resume = useSelector(state => selectResumeById(state, id))
    const users = useSelector(selectAllUsers)

    const content = resume && users ? <EditResumeForm resume={resume} users={users} /> : <p>Loading...</p>

    return content
}
export default EditResume