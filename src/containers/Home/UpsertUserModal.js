import React from "react";
import Modal from "~/components/Modal";
import UpsertUserForm from "./UpsertUserForm";
import Styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledContainer = Styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 0 0px;
  }
`;

const UpsertUserModal = ({
  isUpsertUserVisible,
  setUpsertUserVisible,
  userInitialValues,
  statuses,
  roles,
  fields,
  upsertUser,
  isAdd
}) => {
  const _cancel = () => setUpsertUserVisible(false);

  return (
    <Modal isVisible={isUpsertUserVisible} onCancel={_cancel}>
      <StyledContainer>
        <Typography style={{ margin: '20px 0 0' }} variant="h5">{isAdd? 'Add' : 'Edit' }</Typography>
        <UpsertUserForm
          statuses={statuses}
          fields={fields}
          roles={roles}
          cancel={_cancel}
          onSubmit={upsertUser}
          initialValues={userInitialValues}
        />
      </StyledContainer>
    </Modal>
  );
};

export default UpsertUserModal;
