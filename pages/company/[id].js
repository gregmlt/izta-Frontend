import React from 'react';
import { useRouter } from 'next/router';
import CompanyPageContainer from '@/components/containers/CompanyPageContainer';

const CompanyPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <CompanyPageContainer companyId={id} />;
};

export default CompanyPage;
