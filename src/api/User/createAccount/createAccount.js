import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, firstName = '', lastName = '', bio = '' } = args;
      const exists = await prisma.$exists.user({
        OR: [{ userName }, { email }],
      });

      if (exists) {
        throw Error('This username / email is already taken');
      }

      const data = await prisma.createUser({ userName, email, firstName, lastName, bio });
      console.log(data);
      return true;
    },
  },
};
