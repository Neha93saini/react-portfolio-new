import React, { useState } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import TextField1 from './TextField1';

const BookList1 = () => {
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [formikEdit, setFormikEdit] = useState(false);
  const validate = Yup.object({
    name: Yup.string()
      .max(15, ' Must be 15 characters or less')
      .required(' Name is required'),
    noOfBooks: Yup.number()
      .min(3, 'please enter valid no')
      .required(' required'),
    publisher: Yup.string()
      .required('publisher is required'),
  });

  function setForm() {
    setFormikEdit(false);
  }

  const MyApp = () => {
    const formik = useFormikContext();
    if (!formik) {
      throw "Error loading form"; // eslint-disable-line
    }
    const { values, setFieldValue } = formik;
    React.useEffect(() => {
      if (formikEdit) {
        const data = books[activeIndex];
        setFieldValue('name', data.name);
        setFieldValue('noOfBooks', data.noOfBooks);
        setFieldValue('publisher', data.publisher);
        setForm();
      }
    }, [values, formikEdit]);
    return '';
  };

  //  for add
  const addList = (values) => {
    const book = {
      name: values.name,
      noOfBooks: values.noOfBooks,
      publisher: values.publisher,
    };
    if (edit === true) {
      books[activeIndex] = book;
      setBooks([...books]);
      setEdit(false);
    } else {
      // if edit is true the n we we do add operations
      setBooks([...books, book]);
    }
  };

  const editList = (index) => {
    setActiveIndex(index);
    setEdit(true);
    setFormikEdit(true);
  };

  const deleteList = (index) => {
    const data1 = books.filter((item, i) => i !== index);
    setBooks([...data1]);
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <Formik
          initialValues={{ name: '', noOfBooks: '', publisher: '' }}
          validationSchema={validate}
          onSubmit={(values, actions) => {
            addList(values);
            actions.resetForm();
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <TextField1 label="Name" name="name" type="text" />
              <TextField1 label="No Of Books" name="noOfBooks" type="number" />
              <TextField1 label="Publisher" name="publisher" type="text" />
              <button id="btn" className="btn btn-dark" type="submit">
                ADD
              </button>
              <MyApp />
            </Form>
          )}
        </Formik>
      </div>
      <div className="col-sm-6 table-scroll">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> S.No</th>
              <th> Name</th>
              <th> No of books</th>
              <th> Publisher</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map((item, index) => { // eslint-disable-line
                const i = index + Math.random();
                return (
                  <tr key={i}>
                    <td>
                      {`${index + 1}.`}
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.noOfBooks}
                    </td>
                    <td>
                      {item.publisher}
                    </td>
                    <td>
                      <button className="btn btn-primary m-3" type="button" onClick={() => editList(index)}> Edit</button>
                      <button className="btn btn-primary m-3" type="button" onClick={() => deleteList(index)}> Delete</button>
                    </td>
                  </tr>
                );
              })  // eslint-disable-line
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BookList1;
