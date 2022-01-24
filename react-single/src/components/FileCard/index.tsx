// @flow
import * as React from 'react';
import Icon from '../Icon'
import DescriptionIcon from '@material-ui/icons/Description'
import ClearIcon from '@material-ui/icons/Clear'
import styled from 'styled-components'
import If from '../If';
type Props = {
  id: any
  name: string
  type: string
  data: string
  isEdit: boolean | false
};
const Wrapper = styled.div`
  border: solid 1pt #213054;
  padding: 10px;
  color: white;
  .pointer{
    cursor: pointer;
  }
  .name{
    overflow-wrap: break-word;

  }
  .color-red{
    color: red;
  }
  .color-blue{
    color: #00a2ed;
  }
`
export const FileCard = ({id, name, type, data, isEdit}: Props) => {
  const downloadFile = () =>{
    let downloadLink = document.createElement('a');
    downloadLink.href = data;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  const colorClass = type === 'application/pdf' ? "red" : "blue"
  const clearFile = () => {}
  return (
    <Wrapper className="d-flex align-items-center col-12">
      <If test={isEdit}>
        <div className="col-1 pointer" onClick={() => clearFile()}><ClearIcon /></div>
      </If>
      <div className={`col-2 d-flex justify-content-center`}>{<DescriptionIcon className={`color-${colorClass}`}/>}</div>
      <div className={`col-${isEdit ? "8" : "9"} name`}>{name}</div>
      <div className="col-1 d-flex justify-content-center pointer" onClick={() => downloadFile()}><Icon icon="SaveAlt"/></div>
    </Wrapper>
  );
};
