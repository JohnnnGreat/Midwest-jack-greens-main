import MailchimpSubscribe from "react-mailchimp-subscribe";
import Subscribe from "./Subscribe";

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP;

  return <MailchimpSubscribe url={MAILCHIMP_URL} />;
};

export default NewsletterSubscribe;
