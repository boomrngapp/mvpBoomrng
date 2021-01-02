/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote {
    onCreatePrivateNote {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote {
    onUpdatePrivateNote {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote {
    onDeletePrivateNote {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
      id
      username
      profileImage
      firstName
      middle
      lastName
      suffix
      email
      phoneNumber
      streetNumber
      addPfx
      streetName
      addSfx
      aptSuite
      city
      stateProvince
      postal
      gender
      birthday
      anniversary
      children
      childrenNames
      militaryService
      portfolioID
      portfolio {
        id
        dataTypeID
        data
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
      id
      username
      profileImage
      firstName
      middle
      lastName
      suffix
      email
      phoneNumber
      streetNumber
      addPfx
      streetName
      addSfx
      aptSuite
      city
      stateProvince
      postal
      gender
      birthday
      anniversary
      children
      childrenNames
      militaryService
      portfolioID
      portfolio {
        id
        dataTypeID
        data
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
      id
      username
      profileImage
      firstName
      middle
      lastName
      suffix
      email
      phoneNumber
      streetNumber
      addPfx
      streetName
      addSfx
      aptSuite
      city
      stateProvince
      postal
      gender
      birthday
      anniversary
      children
      childrenNames
      militaryService
      portfolioID
      portfolio {
        id
        dataTypeID
        data
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePortfolio = /* GraphQL */ `
  subscription OnCreatePortfolio {
    onCreatePortfolio {
      id
      dataTypeID
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio {
    onUpdatePortfolio {
      id
      dataTypeID
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio {
    onDeletePortfolio {
      id
      dataTypeID
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateDataTypeId = /* GraphQL */ `
  subscription OnCreateDataTypeId {
    onCreateDataTypeID {
      id
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDataTypeId = /* GraphQL */ `
  subscription OnUpdateDataTypeId {
    onUpdateDataTypeID {
      id
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDataTypeId = /* GraphQL */ `
  subscription OnDeleteDataTypeId {
    onDeleteDataTypeID {
      id
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      physical
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      physical
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      physical
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
      id
      first
      last
      email
      phoneNumber
      streetNumber
      addPfx
      streetName
      addSfx
      aptSuite
      city
      stateProvince
      postal
      birthday
      children
      childrenNames
      militaryService
      importantDates
      reminderDates
      recipientItems
      contactTags {
        contactTags
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
      id
      first
      last
      email
      phoneNumber
      streetNumber
      addPfx
      streetName
      addSfx
      aptSuite
      city
      stateProvince
      postal
      birthday
      children
      childrenNames
      militaryService
      importantDates
      reminderDates
      recipientItems
      contactTags {
        contactTags
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
      id
      first
      last
      email
      phoneNumber
      streetNumber
      addPfx
      streetName
      addSfx
      aptSuite
      city
      stateProvince
      postal
      birthday
      children
      childrenNames
      militaryService
      importantDates
      reminderDates
      recipientItems
      contactTags {
        contactTags
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProfileCalendar = /* GraphQL */ `
  subscription OnCreateProfileCalendar {
    onCreateProfileCalendar {
      id
      name
      absoluteDate
      contactConnect
      contactId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfileCalendar = /* GraphQL */ `
  subscription OnUpdateProfileCalendar {
    onUpdateProfileCalendar {
      id
      name
      absoluteDate
      contactConnect
      contactId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfileCalendar = /* GraphQL */ `
  subscription OnDeleteProfileCalendar {
    onDeleteProfileCalendar {
      id
      name
      absoluteDate
      contactConnect
      contactId
      createdAt
      updatedAt
      owner
    }
  }
`;
