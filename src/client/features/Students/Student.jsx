import { useDeleteStudentMutation, useGetStudentQuery } from "./studentSlice";
import { useParams } from "react-router-dom";
import UpdateForm from "./UpdateForm";
import "./pretty.css"

export default function Student() {
    const {id} = useParams();
    const { data, isLoading, isError } = useGetStudentQuery(id);
    const [deleteStudent] = useDeleteStudentMutation(id);

    const onDelete = async (evt) => {
        evt.preventDefault();
        deleteStudent(student.id);
      };

      if (isLoading) {
        return <h1>Loading Student ...</h1>;
      }
    
      if (isError || !data) {
        return <h1>Error loading data</h1>;
      }
    
      const student = data
    
    return (
        <div>
            <img src={student.imageUrl} />
            <h2>{student.firstName} {student.lastName}</h2>
            <p>Email: {student.email}</p>
            <p>GPA: {student.gpa}</p>
            <button onClick={onDelete} aria-label="delete"> Delete </button>
            <br />
            <UpdateForm />
        </div>
    )
}