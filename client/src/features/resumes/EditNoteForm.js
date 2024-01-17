import { useState, useEffect } from "react"
import { useUpdateResumeMutation, useDeleteResumeMutation } from "./resumesApiSlice"
import { useNavigate } from "react-router-dom"

const EditResumeForm = ({ resume, users }) => {

    const [updateResume, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateResumeMutation()

    const [deleteResume, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteResumeMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState(resume.title)
    const [text, setText] = useState(resume.text)
    const [completed, setCompleted] = useState(resume.completed)
    const [userId, setUserId] = useState(resume.user)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setTitle('')
            setText('')
            setUserId('')
            navigate('/dash/resumes')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onTitleChanged = e => setTitle(e.target.value)
    const onTextChanged = e => setText(e.target.value)
    const onCompletedChanged = e => setCompleted(prev => !prev)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [title, text, userId].every(Boolean) && !isLoading

    const onSaveResumeClicked = async (e) => {
        if (canSave) {
            await updateResume({ id: resume.id, user: userId, title, text, completed })
        }
    }

    const onDeleteResumeClicked = async () => {
        await deleteResume({ id: resume.id })
    }

    const created = new Date(resume.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
    const updated = new Date(resume.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}

            > {user.username}</option >
        )
    })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
    const validTextClass = !text ? "form__input--incomplete" : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Resume #{resume.ticket}</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSaveResumeClicked}
                            disabled={!canSave}
                        >
                        </button>
                        <button
                            className="icon-button"
                            title="Delete"
                            onClick={onDeleteResumeClicked}
                        >
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="resume-title">
                    Title:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="resume-title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label className="form__label" htmlFor="resume-text">
                    Text:</label>
                <textarea
                    className={`form__input form__input--text ${validTextClass}`}
                    id="resume-text"
                    name="text"
                    value={text}
                    onChange={onTextChanged}
                />
                <div className="form__row">
                    <div className="form__divider">
                        <label className="form__label form__checkbox-container" htmlFor="resume-completed">
                            WORK COMPLETE:
                            <input
                                className="form__checkbox"
                                id="resume-completed"
                                name="completed"
                                type="checkbox"
                                checked={completed}
                                onChange={onCompletedChanged}
                            />
                        </label>

                        <label className="form__label form__checkbox-container" htmlFor="resume-username">
                            ASSIGNED TO:</label>
                        <select
                            id="resume-username"
                            name="username"
                            className="form__select"
                            value={userId}
                            onChange={onUserIdChanged}
                        >
                            {options}
                        </select>
                    </div>
                    <div className="form__divider">
                        <p className="form__created">Created:<br />{created}</p>
                        <p className="form__updated">Updated:<br />{updated}</p>
                    </div>
                </div>
            </form>
        </>
    )

    return content
}

export default EditResumeForm