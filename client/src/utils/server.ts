import { parse } from 'cookie';
import { GetServerSidePropsContext, NextPageContext } from 'next';

export function getTokenFromContext(ctx: GetServerSidePropsContext | NextPageContext) {
  const cookies = parse(ctx.req?.headers.cookie || '');
  return cookies['auth-token'] ?? null;
}
