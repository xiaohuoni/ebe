import CustomBtn from '../../../DGroup/CustomBtn';
import Icon from '../../../Icon';
import '../../index.less';
import CheckIcon from '../Icon';

const ActionView = (props: any) => {
  const {
    status,
    selectImg,
    normalImg,
    actionView,
    actionViewStyle,
    showChecked,
    showAllCheck,
    actionViewPosition,
    allSelectAction,
    selectAll,
    selectedNumber,
    defaultIcon,
    onClickSubmit,
    onClickCancel,
    selectIconColor,
    normalIconColor,
    getEngineApis,
    name,
    $$componentItem,
  } = props;

  const { getLocale } = getEngineApis();

  const renderRigthView = () => {
    if (Array.isArray(actionView) && actionView.length) {
      const myActionView: any = [];
      actionView.forEach((item: any) => {
        if (item.checked) {
          myActionView.unshift(item);
        }
      });
      return (
        <div className="rigthView">
          {myActionView.map((item: any, index: number) => {
            const {
              title,
              iconPos,
              icon,
              customStyle,
              customCode,
              isIcon,
              rule,
            } = item;

            const svgContent =
              (icon && icon?.iconFileInfo && icon?.iconFileInfo?.svgContent) ||
              null;

            let myTitle = title;
            const buttonPadding: any = {};
            const buttonStyle: any = {};
            buttonStyle.borderRadius = '4px';
            buttonStyle.fontSize = '16px';
            buttonStyle.fontWeight = 500;
            buttonPadding.marginTop = '8px';
            buttonPadding.marginBottom = '8px';
            if (myActionView.length > 1 && index === 0) {
              buttonPadding.marginRight = '4px';
            }
            switch (actionViewStyle) {
              case 'styleOne':
                // eslint-disable-next-line no-lone-blocks
                {
                  buttonStyle.color = '#ffffff';
                  buttonStyle.backgroundColor = '#4477EE';
                  buttonStyle.borderRadius = '0px';
                  buttonPadding.padding = '12px 36px';
                  buttonPadding.marginTop = '0px';
                  buttonPadding.marginBottom = '0px';
                  if (buttonPadding.marginRight) {
                    buttonStyle.color = '#4477EE';
                    buttonStyle.backgroundColor = 'rgba(68, 119, 238, 0.10)';
                    buttonPadding.marginRight = '0px';
                  }
                }
                break;
              case 'styleTwo':
                // eslint-disable-next-line no-lone-blocks
                {
                  buttonStyle.color = '#ffffff';
                  buttonStyle.backgroundColor = '#4477EE';
                  buttonStyle.borderRadius = '300px';
                  buttonPadding.padding = '6px 28px';
                  if (buttonPadding.marginRight) {
                    buttonStyle.color = '#4477EE';
                    buttonStyle.backgroundColor = 'rgba(68, 119, 238, 0.10)';
                  } else {
                    // 右边第一个按键
                    buttonPadding.marginRight = '16px';
                  }
                }
                break;
              case 'styleThree':
                // eslint-disable-next-line no-lone-blocks
                {
                  buttonStyle.color = '#ffffff';
                  buttonStyle.backgroundColor = '#4477EE';
                  buttonPadding.padding = '6px 29px';
                  if (buttonPadding.marginRight) {
                    buttonStyle.color = '#4477EE';
                    buttonStyle.backgroundColor = 'rgba(68, 119, 238, 0.10)';
                    buttonPadding.marginRight = '4px';
                  } else {
                    // 右边第一个按键
                    buttonPadding.marginRight = '16px';
                  }
                  if (showChecked && index === myActionView.length - 1) {
                    buttonPadding.padding = '6px 16px';
                    myTitle = `${title} (${selectedNumber})`;
                  }
                }
                break;
              default:
                // eslint-disable-next-line no-lone-blocks
                {
                  buttonStyle.color = '#ffffff';
                  buttonStyle.backgroundColor = '#4477EE';
                  buttonPadding.padding = '6px 24px';
                  if (buttonPadding.marginRight) {
                    buttonStyle.color = '#4477EE';
                    buttonStyle.backgroundColor = '#ffffff';
                    buttonStyle.border = '1px solid #4477EE';
                    buttonPadding.marginRight = '6px';
                  } else {
                    // 右边第一个按键
                    buttonPadding.marginRight = '16px';
                  }
                }
                break;
            }

            // 查看按钮是否需要隐藏(运行态使用)
            // eslint-disable-next-line no-eval
            if ((typeof rule === 'boolean' && rule) || eval(rule)) {
              buttonPadding.display = 'none';
            }

            let view = <></>;
            const iconView = (
              <Icon
                {...icon}
                svgContent={svgContent}
                getEngineApis={getEngineApis}
                name={name}
                $$componentItem={$$componentItem}
              />
            );
            if (iconPos === 'left') {
              view = (
                <>
                  {iconView}
                  {myTitle}
                </>
              );
            } else {
              view = (
                <>
                  {myTitle}
                  {iconView}
                </>
              );
            }
            if (isIcon) {
              view = <>{iconView}</>;
            }

            let myOnClick: any;
            if (`${item?.id}` === '1') {
              myOnClick = (e: any) => {
                if (onClickSubmit) {
                  onClickSubmit(e);
                }
              };
            } else {
              myOnClick = (e: any) => {
                if (onClickCancel) {
                  onClickCancel(e);
                }
              };
            }

            switch (customStyle) {
              case 'borderBtn': // 描边按钮
                return (
                  <div
                    className="borderBtn"
                    style={buttonPadding}
                    onClick={(e) => {
                      myOnClick(e);
                    }}
                  >
                    {view}
                  </div>
                );
              case 'ligthColor': // 浅色按钮
                return (
                  <div
                    className="lightBtn"
                    style={buttonPadding}
                    onClick={(e) => {
                      myOnClick(e);
                    }}
                  >
                    {view}
                  </div>
                );
              case 'primaryBtn': // 纯色按钮
                return (
                  <div
                    className="primaryBtn"
                    style={buttonPadding}
                    onClick={(e) => {
                      myOnClick(e);
                    }}
                  >
                    {view}
                  </div>
                );
              case 'cutsomBtn': // 自定义按钮
                // eslint-disable-next-line no-case-declarations
                const iconInfo: any = {
                  ...icon,
                  svgContent,
                };
                return (
                  <CustomBtn
                    customCode={customCode}
                    icon={iconInfo}
                    title={myTitle}
                    isIcon={isIcon}
                  />
                );
              default: {
                // 默认图标按钮
                return (
                  <div
                    style={{ ...buttonStyle, ...buttonPadding }}
                    onClick={(e) => {
                      myOnClick(e);
                    }}
                  >
                    {view}
                  </div>
                );
              }
            }
          })}
        </div>
      );
    }
    return null;
  };

  const mySelectedAllChange = () => {
    if (status === '3') return;
    allSelectAction(!selectAll);
  };

  const viewStyle: any = {};
  if (actionViewPosition === 'top') {
    viewStyle.borderBottom = '1px solid #F0F0F0';
  } else {
    viewStyle.borderTop = '1px solid #F0F0F0';
  }
  let allSelectView: any = <></>;
  let selectIcon: any = <></>;
  let allSelectNotice: any = <></>;

  if (showAllCheck) {
    selectIcon = (
      <CheckIcon
        defaultIcon={defaultIcon}
        selectImg={selectImg}
        normalImg={normalImg}
        checked={selectAll}
        iconPosition="left"
        className="cust-icon-theme"
        onChange={mySelectedAllChange}
        normalIconColor={normalIconColor}
        selectIconColor={selectIconColor}
        getEngineApis={getEngineApis}
        $$componentItem={$$componentItem}
      />
    );
    switch (actionViewStyle) {
      case 'styleOne':
        allSelectNotice = (
          <div className="styleOne">
            <span
              onClick={() => {
                if (status === '3') return;
                allSelectAction(!selectAll);
              }}
            >
              {getLocale('selectAll', '全选')}
            </span>
            {showChecked && (
              <span className="styleOne-number">
                {getLocale('selectNumber', `已选${selectedNumber}个`, {
                  num: selectedNumber,
                })}
              </span>
            )}
          </div>
        );
        break;
      case 'styleTwo':
        allSelectNotice = (
          <div className="styleTwo">
            <span
              onClick={() => {
                if (status === '3') return;
                allSelectAction(!selectAll);
              }}
            >
              {getLocale('selectAll', '全选')}
            </span>
            {showChecked && (
              <span className="styleTwo-number">
                {getLocale('selectNumber', `已选${selectedNumber}个`, {
                  num: selectedNumber,
                })}
              </span>
            )}
          </div>
        );
        break;
      case 'styleThree':
        allSelectNotice = (
          <span
            className="styleThree"
            onClick={() => {
              if (status === '3') return;
              allSelectAction(!selectAll);
            }}
          >
            {getLocale('selectAll', '全选')}
          </span>
        );
        break;
      default:
        // eslint-disable-next-line no-lone-blocks
        {
          allSelectNotice = (
            <div
              className="styleDefault"
              onClick={() => {
                if (status === '3') return;
                allSelectAction(!selectAll);
              }}
            >
              <span>{getLocale('selectAll', '全选')}</span>
              {showChecked && (
                <span className="styleDefault-number">
                  {getLocale('selectNumber', `已选${selectedNumber}个`, {
                    num: selectedNumber,
                  })}
                </span>
              )}
            </div>
          );
        }
        break;
    }
  }

  allSelectView = (
    <div className="noticeView">
      {selectIcon}
      {allSelectNotice}
    </div>
  );

  const hasActionView = actionView?.find((item: any) => item.checked);
  return hasActionView || showAllCheck ? (
    <div className="blockSelect-ActionView" style={viewStyle}>
      {allSelectView}
      {renderRigthView()}
    </div>
  ) : (
    <div />
  );
};

export default ActionView;
