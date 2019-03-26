import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../style/borderRadius';
import { transition } from '../../../style/transition';
import { boxShadow } from '../../../style/boxShadow';

const TopBarWrapper = styled.div`
  .op-top-bar {
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: ${boxShadow(' 0 2px 4px 0 rgba(144, 164, 183, 0.22)')};
    padding: 0 31px 0 265px;
    z-index: 2;
    ${transition()};

    @media only screen and (max-width: 767px) {
      padding: 0px 15px 0px 260px !important;
    }

    &.collapsed {
      padding: 0 31px 0 89px;
      @media only screen and (max-width: 767px) {
        padding: 0px 15px !important;
      }
    }

    .op-left {
      display: flex;
      align-items: center;

      @media only screen and (max-width: 767px) {
        margin: 0 20px 0 0;
      }

      .menu-collapse-btn {
        width: 24px;
        height: 100%;
        display: -webkit-inline-flex;
        display: -ms-inline-flex;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 0;
        outline: 0;
        position: relative;
        cursor: pointer;

        &:before {
          content: '\f20e';
          font-family: 'Ionicons';
          font-size: 26px;
          color: inherit;
          line-height: 0;
          position: absolute;
        }
      }
    }

    .op-right {
      display: flex;
      align-items: center;

      li {
        margin-left: 0;
        margin-right: 35px;
        cursor: pointer;
        line-height: normal;
        position: relative;
        display: inline-block;

        @media only screen and (max-width: 360px) {
          margin-left: 0;
          margin-right: 25px;
        }

        &:last-child {
          margin: 0;
        }

        i {
          font-size: 24px;
          color: ${palette('text', 0)};
          line-height: 1;
        }

        .isoIconWrapper {
          position: relative;
          line-height: normal;

          span {
            font-size: 12px;
            color: #fff;
            background-color: ${palette('secondary', 1)};
            width: 20px;
            height: 20px;
            display: -webkit-inline-flex;
            display: -ms-inline-flex;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            line-height: 20px;
            position: absolute;
            top: -8px;
            left: 10px;
            right: inherit;
            ${borderRadius('50%')};
          }
        }
        &.op-user {
          .user-image-wrapper {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: ${palette('grayscale', 9)};
            ${borderRadius('50%')};

            img {
              height: 100%;
              object-fit: cover;
            }

            .user-activity {
              width: 10px;
              height: 10px;
              display: block;
              background-color: ${palette('color', 3)};
              position: absolute;
              bottom: 0;
              right: 3px;
              border: 1px solid #ffffff;
              ${borderRadius('50%')};
            }
          }
        }
      }
    }
  }

  .op-user-dropdown {
    .ant-popover-inner {
      .ant-popover-inner-content {
        .isoUserDropdownContent {
          padding: 7px 0;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 0;
          right: 0;
          background-color: #ffffff;
          width: 220px;
          min-width: 160px;
          flex-shrink: 0;
          .isoBorderRadius(5px);
          ${borderRadius('5px')};
          ${boxShadow('0 2px 10px rgba(0,0,0,0.2)')};
          ${transition()};

          .isoDropdownLink {
            font-size: 13px;
            color: ${palette('text', 1)};
            line-height: 1.1;
            padding: 7px 15px;
            background-color: transparent;
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            ${transition()};

            &:hover {
              background-color: ${palette('secondary', 6)};
            }
          }
        }
      }
    }
  }
`;

export default TopBarWrapper;
