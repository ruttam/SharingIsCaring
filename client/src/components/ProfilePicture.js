import React from 'react';
import axios from 'axios';
import classnames from 'classnames';

const divCircle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  overflow: 'hidden',
  background: '#DCDCDC',
}

const divStyle = {
  paddingTop: "10px"
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

  _onSubmit(e) {
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
    //if (filePreview) {
      $imagePreview = (<div style={divCircle}><img style={divCircle} src={filePreview} /></div>);
    //} else {
    //  $imagePreview = (<div style={divCircle}><img style={divCircle} src={filePreview} /></div>);
    //}

    return (
      <div className="col-lg-4">
        <div className="previewComponent">
          <div className="imgPreview">
            {$imagePreview}
            <div className={ classnames("form-group") }>
              <form onSubmit={(e)=>this._onSubmit(e)}>
                <div style={divStyle}>
                  <input type="file" onChange={(e)=>this._handleImageChange(e)} />
                </div>
                <div style={divStyle}>
                  <button className="btn .btn-primary" type="submit">upload</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePicture;
