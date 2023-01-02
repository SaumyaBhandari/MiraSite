import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img 
                src="https://i.pinimg.com/564x/f2/bf/dc/f2bfdcb747dd3e10d12b7da28750cccc.jpg" 
                alt="" 
                className='writeImage'
            />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"> 
                        <i className=" writeIcon fa-solid fa-plus"></i> 
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Pour yourself out...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish!</button>
            </form>
        </div>
    )
}