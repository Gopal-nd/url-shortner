import prisma from '@/utils/db';
import { redirect } from 'next/navigation';
import React from 'react';

const GetLink = async ({ params }: { params: { id: string } }) => {
  const id = params.id[0]

  // Fetch the original link from the database
  const original = await prisma.link.findUnique({
    where: {
      id: id,
    },
  });

  // If the original link is found, perform a redirect
  if (original?.original) {
    redirect(original.original); // Redirects to the original link
  }

  // Handle the case where the link is not found
  return <div>Link not found</div>;
};

export default GetLink;
