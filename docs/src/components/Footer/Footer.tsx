import React, {Component} from "react";
import Container from "../Container";
import styles from './Footer.module.scss';
import {Link} from "gatsby";
import {OutboundLink} from "gatsby-plugin-google-analytics";


export default class Footer extends Component {

  render() {
    return (
      <div className={styles.footer}>
        <Container>
          <div className={styles.container}>
            <div className={styles.links}>
              <div className={styles.linksContainer}>
                <Link to={'/'}>About</Link>
                <Link to={'/docs/installation'}>Installation</Link>
              </div>
              <div className={styles.linksContainer}>
                <OutboundLink href={'https://github.com/Joatin/shelfdb'}>Github</OutboundLink>
                <OutboundLink href={'https://hub.docker.com/r/joatin/shelfdb'}>Docker</OutboundLink>
              </div>
            </div>
            <div className={styles.copyrightRow}>
              <span>Copyright @2020 Joatin Granlund</span>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
