/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPortfolio = /* GraphQL */ `
  query GetPortfolio($id: ID!) {
    getPortfolio(id: $id) {
      id
      dataTypeID
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPortfolios = /* GraphQL */ `
  query ListPortfolios(
    $filter: ModelPortfolioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dataTypeID
        data
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDataTypeId = /* GraphQL */ `
  query GetDataTypeId($id: ID!) {
    getDataTypeID(id: $id) {
      id
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDataTypeIDs = /* GraphQL */ `
  query ListDataTypeIDs(
    $filter: ModeldataTypeIDFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataTypeIDs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      physical
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        physical
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileCalendar = /* GraphQL */ `
  query GetProfileCalendar($id: ID!) {
    getProfileCalendar(id: $id) {
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
export const listProfileCalendars = /* GraphQL */ `
  query ListProfileCalendars(
    $filter: ModelProfileCalendarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileCalendars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        absoluteDate
        contactConnect
        contactId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
