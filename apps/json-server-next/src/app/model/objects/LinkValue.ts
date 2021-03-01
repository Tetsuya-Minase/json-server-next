export type TextLink = {
  readonly type: 'text';
  readonly url: string;
  readonly text: string;
};
export type ButtonLink = {
  readonly type: 'button';
  readonly url: string;
  readonly text: string;
};
export type ImageLink = {
  readonly type: 'image';
  readonly url: string;
  readonly imageUrl: string;
};

export type LinkValue = TextLink | ButtonLink | ImageLink;
