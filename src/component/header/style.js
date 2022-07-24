import styled from "styled-components";
import logoPic from '../../statics/logo.png';
import searchPic from '../../statics/myIcons/search.svg';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    /* background: red; */
    border-bottom: 1px solid #F0F0F0;
    z-index: 0;
`;

export const Logo = styled.div`
    height: 56px;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
    /* background: red; */
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    /* background: red; */
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearchBar = styled.div`
    /* background: url(${searchPic}); */
    position: relative;
    float: left;
    /* background: red; */
    margin: auto 0px;
`;

export const NavSearchIcon = styled.div`
    /* display: flex; */
    position: absolute;
    bottom: 4.5px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    /* align-items: center; */
    background-image: url(${searchPic});
    background-repeat: no-repeat;
    /* background-color: green; */
    background-size: 17px;
    background-position: 50% 50%;
    /* transform: translate(50%, 50%); */
    /* background-origin: content-box; */
    /* vertical-align: center; */
    /* border-top: 1px; */
    /* padding-top: 2px; */
    /* padding-left: 4px; */
    &.focused {
        background-color: #777;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777777;
    &::placeholder {
        color: #999999;
    }
    &.focused {
        width: 240px;
    }

    &.slide-enter {
      transition: all .2s ease-out;
      width: 160px;
    }
    &.slide-enter-active {
      width: 240px;
    }
  
    &.slide-exit {
      transition: all .2s ease-out;
    }
    &.slide-exit-active {
      width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    /* height: 100px; */
    width: 240px;
    box-sizing: border-box;
    padding: 0 20px;
    transform: translateX(20px);
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    z-index: 999;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

// export const SearchInfoList = styled.div`
// `

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 8px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 2px;
`;

export const AddButton = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.reg {
        background: #ec6149;
        color: #fff;
    }
`;

