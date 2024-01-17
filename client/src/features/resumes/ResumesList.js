import { useGetResumesQuery } from "./resumesApiSlice"
import Resume from "./Resume"

const ResumesList = () => {
    const {
        data: resumes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetResumesQuery(undefined, {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = resumes

        const tableContent = ids?.length
            ? ids.map(resumeId => <Resume key={resumeId} resumeId={resumeId} />)
            : null

        content = (
            <table className="table table--resumes">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th resume__status">Username</th>
                        <th scope="col" className="table__th resume__created">Created</th>
                        <th scope="col" className="table__th resume__updated">Updated</th>
                        <th scope="col" className="table__th resume__title">Title</th>
                        <th scope="col" className="table__th resume__username">Owner</th>
                        <th scope="col" className="table__th resume__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default ResumesList