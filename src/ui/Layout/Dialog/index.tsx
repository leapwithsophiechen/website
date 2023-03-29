/* eslint-disable max-len */
import { RootState } from '@/store';
import { setDialogState as setDialogStateAction } from '@/store/ui';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';

interface Props {
  isOpen: boolean;
  message: string;
  setDialogState: typeof setDialogStateAction;
  title: string;
}

const Component = ({ isOpen, message, setDialogState, title }: Props) => {
  //
  const handleCloseDialog = () => {
    setDialogState({ isShow: false, message: '', title: '' });
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={handleCloseDialog}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{message}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

const states = (state: RootState) => ({
  isOpen: state.ui.isShowDialog,
  message: state.ui.dialogMessage,
  title: state.ui.dialogTitle,
});

const dispatch = {
  setDialogState: setDialogStateAction,
};

export const Dialog = connect(states, dispatch)(Component);
