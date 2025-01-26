import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export const QuillEditor = (props: any) => {
    const { description, setDescription } = props;

    // toolbar options for quill editor
    const toolbarOptions = [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        ['clean'],
    ];
    return <ReactQuill
        theme="snow"
        id="description"
        value={description}
        placeholder="Start typing here..."
        onChange={setDescription}
        modules={{
            toolbar: toolbarOptions,
            history: {          // Enable with custom configurations
                delay: 2500,
                userOnly: true
            },
        }

        }
    />
}
