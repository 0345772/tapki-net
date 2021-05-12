import React from "react";
import  {TapkistoreServiceConsumer} from '../tapkistore-service-context';


const withTapkistoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <TapkistoreServiceConsumer>
        {
          (tapkistoreService) => {
            return ( <Wrapped { ...props} tapkistoreService={tapkistoreService} /> )
          }
        }
      </TapkistoreServiceConsumer>
    )
  }
}

export default withTapkistoreService;