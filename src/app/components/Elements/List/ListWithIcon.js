import React from "react";
import { ListItemText, ListItem, ListItemIcon } from "@mui/material";
import { ExpandLess, ExpandMore, ArrowForwardIos } from "@mui/icons-material";

function ListWithIcon(props, ref) {
  const [hover, setHover] = React.useState(null);
  const HandleMouseEnter = () => {
    setHover(true);
  };

  const HandleMouseLeave = () => {
    setHover(false);
  };

  const renderIcon = () => {
    if (hover || props.selected) {
      if (props.selected && props.selectedIcon) {
        return props.selectedIcon;
      }
      return props.hoverIcon;
    } else {
      return props.listIcon;
    }
  };

  return (
    <>
      <ListItem
        disabled={props.disabled}
        selected={props.selected}
        component={props.component}
        classes={props.listItemClasses}
        button={props.button}
        onClick={props.onClick}
        ref={ref}
        data-cy={props.dataAttributes}
        onMouseEnter={() => HandleMouseEnter()}
        onMouseLeave={() => HandleMouseLeave()}
      >
        {props.listIcon && (
          <ListItemIcon className={props.listIconClass}>
            {renderIcon()}
          </ListItemIcon>
        )}
        <ListItemText
          primaryTypographyProps={props.primaryTypographyProps}
          primary={props.primary || "Primary"}
          className={props.listItemTextClasses}
        />

        {props.secondaryIcon && (
          <>
            {props.secondaryIcon && props.open ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </>
        )}

        {props.arrowIcon && (
          <ArrowForwardIos style={{width: "12px"}} />
        )}
      </ListItem>
    </>
  );
}

export default React.forwardRef(ListWithIcon);
