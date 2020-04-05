import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

const NewsSection = ({ section, items, onHandleShowNews }) => {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    return (
        <div className={classes.section}>
            {section ? (<h2 className={classes.title}>{section}</h2>) : null}

            <div>
                <GridContainer>
                    {items.map(item => {
                        return (<GridItem xs={12} sm={12} md={4}>
                            <Card plain onClick={() => onHandleShowNews(item.id, item.portal_name)} style={{ "cursor": "pointer" }}>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    {
                                        item.image ? <img src={item.image} alt="..." className={imageClasses} /> :
                                            <img src={item.image_path} alt="..." className={imageClasses} style={{ "width": "200px", "height": "150px" }} />
                                    }

                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    {item.title}
                                    <br />
                                </h4>
                                <CardBody>
                                    <p className={classes.content}>
                                        {item.description}
                                    </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                    <small className={classes.smallTitle}>Written by {item.author} - {item.date}</small>
                                </CardFooter>
                            </Card>

                        </GridItem>);
                    })}

                </GridContainer>
            </div>
        </div>
    );
};

export default NewsSection;
