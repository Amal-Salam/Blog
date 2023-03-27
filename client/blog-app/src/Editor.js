import ReactQuill from 'react-quill';

export default function Editor({ value, onChange }) {
 const modules = {
   toolbar: [
     [{ header: [1, 2, 3, 4, false] }],
     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
     [{ size: ['small', false, 'large', 'huge'] }],
     [{ color: [] }, { background: [] }],
     [{ font: [] }],
     [{ align: [] }],
     [
       { list: 'ordered' },
       { list: 'unordered' },
       { list: 'bullet' },
       { indent: '-1' },
       { indent: '+1' },
     ],
     ['link', 'image'],
     ['clean'],
   ],
 };
  return (
    <div className='content'>
      <ReactQuill
        value={value}
        theme={'snow'}
        onChange={onChange}
        modules={modules}
      />
    </div>
  );
}
