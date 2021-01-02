/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createPortfolio = /* GraphQL */ `
  mutation CreatePortfolio(
    $input: CreatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    createPortfolio(input: $input, condition: $condition) {
      id
      dataTypeID
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePortfolio = /* GraphQL */ `
  mutation UpdatePortfolio(
    $input: UpdatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    updatePortfolio(input: $input, condition: $condition) {
      id
      dataTypeID
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePortfolio = /* GraphQL */ `
  mutation DeletePortfolio(
    $input: DeletePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    deletePortfolio(input: $input, condition: $condition) {
      id
      dataTypeID
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDataTypeId = /* GraphQL */ `
  mutation CreateDataTypeId(
    $input: CreateDataTypeIDInput!
    $condition: ModeldataTypeIDConditionInput
  ) {
    createDataTypeID(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDataTypeId = /* GraphQL */ `
  mutation UpdateDataTypeId(
    $input: UpdateDataTypeIDInput!
    $condition: ModeldataTypeIDConditionInput
  ) {
    updateDataTypeID(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDataTypeId = /* GraphQL */ `
  mutation DeleteDataTypeId(
    $input: DeleteDataTypeIDInput!
    $condition: ModeldataTypeIDConditionInput
  ) {
    deleteDataTypeID(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      physical
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      physical
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      physical
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createProfileCalendar = /* GraphQL */ `
  mutation CreateProfileCalendar(
    $input: CreateProfileCalendarInput!
    $condition: ModelProfileCalendarConditionInput
  ) {
    createProfileCalendar(input: $input, condition: $condition) {
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
export const updateProfileCalendar = /* GraphQL */ `
  mutation UpdateProfileCalendar(
    $input: UpdateProfileCalendarInput!
    $condition: ModelProfileCalendarConditionInput
  ) {
    updateProfileCalendar(input: $input, condition: $condition) {
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
export const deleteProfileCalendar = /* GraphQL */ `
  mutation DeleteProfileCalendar(
    $input: DeleteProfileCalendarInput!
    $condition: ModelProfileCalendarConditionInput
  ) {
    deleteProfileCalendar(input: $input, condition: $condition) {
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
