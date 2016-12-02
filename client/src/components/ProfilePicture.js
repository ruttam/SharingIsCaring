import React from 'react';
import axios from 'axios';

const divCircle = {
    width: '200px',
    height: '200px',
    background: '#E5E5E5',
    border: 'thin solid #B7B7B7',
    borderRadius: '50%'
}

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    // axios({
    //   method: 'GET',
    //   url: 'http://localhost:5000/api/userImage/get',
    //   mode: 'no-cors',
    //   data: this.props.id,
    //   dataType: 'json'
    // })
    // .then((result)=>{
    //   console.log(result);
    // });
    this.state = {file: '', filePreview: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('Uploading: ', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        filePreview: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {filePreview} = this.state;
    let $imagePreview = null;
    if (filePreview) {
      $imagePreview = (<div style={divCircle}><img style={divCircle} src={filePreview} /></div>);
    } else {
      $imagePreview = (<div style={divCircle}><img style={divCircle} src={filePreview} /></div>);
    }

    return (
      <div className="col-lg-4">
      <div className="previewComponent">
        <div className="imgPreview">
        {$imagePreview}
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>

        </div>
      </div>
      </div>
    )
  }
}

export default ProfilePicture;
