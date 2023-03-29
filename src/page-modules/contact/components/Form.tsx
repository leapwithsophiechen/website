import { Checkbox, Input, TextArea } from '@/components';
import {
  googleReCaptchaSiteKey,
  marketingApiBaseUrl,
  marketingSiteUrl,
} from '@/config';
import { RootState } from '@/store';
import { setDialogState as setDialogStateAction } from '@/store/ui';
import { setRecaptcha as setRecaptchaAction } from '@/store/vendorScripts';
import { Button, LightMode } from '@chakra-ui/react';
import { captureException } from '@sentry/gatsby';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { connect } from 'react-redux';

declare global {
  interface Window {
    grecaptcha: any;
    onloadCallback: any;
    recaptchaLoaded: any;
    submitValidatedForm: any;
  }
}

interface Props {
  isRecaptchaLoaded: boolean;
  setDialogState: typeof setDialogStateAction;
  setRecaptcha: typeof setRecaptchaAction;
}

const checkboxLabel = (
  <div className="text-base leading-6 text-black">
    Agree to our{' '}
    <a
      aria-label="privacy policy"
      className="anchor"
      href={`${marketingSiteUrl}/privacy-policy`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="whitespace-nowrap">privacy policy</span>.
    </a>
    . Your personal data is only used to respond to your form submission.
  </div>
);

const Component = (props: Props) => {
  //
  const { isRecaptchaLoaded, setDialogState, setRecaptcha } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm();

  // useFormPersist(
  //   'contact-form',
  //   { setValue, watch },
  //   {
  //     exclude: ['agree'],
  //     storage: window.localStorage,
  //   }
  // );

  useEffect(() => {
    if (window && document) {
      if (!isRecaptchaLoaded) {
        const grecaptchaScript = document.createElement('script');
        const body = document.getElementsByTagName('body')[0];
        grecaptchaScript.src =
          'https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit';
        body.appendChild(grecaptchaScript);

        grecaptchaScript.addEventListener('load', () => {
          window.grecaptcha.ready(() => {
            window.grecaptcha.render('g-recaptcha', {
              callback: 'submitValidatedForm',
              sitekey: googleReCaptchaSiteKey,
              size: 'invisible',
            });
            setRecaptcha(true);
            setIsSubmitDisabled(false);
          });
        });
      }

      if (isRecaptchaLoaded) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render('g-recaptcha', {
            callback: 'submitValidatedForm',
            className: 'boop',
            sitekey: googleReCaptchaSiteKey,
            size: 'invisible',
          });
          setIsSubmitDisabled(false);
        });
      }
    }
  }, []);

  const submitForm = async (token: string) => {
    const { agree, email, firstName, lastName, message, phone, subject } =
      getValues();

    const payload = {
      agree,
      email,
      firstName,
      lastName,
      message,
      phone,
      subject,
      token,
    };

    try {
      window.grecaptcha.reset();

      setIsSubmitting(true);

      const res = await fetch(`${marketingApiBaseUrl}/contact-form`, {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!res.ok) {
        throw Error(res.statusText);
      }

      reset({
        agree: false,
        email: '',
        firstName: '',
        lastName: '',
        message: '',
        phone: '',
        subject: '',
      });

      setIsSubmitting(false);
      setDialogState({
        isShow: true,
        message: 'Thank you',
        title: 'Submission successful',
      });
      //
    } catch (e: any) {
      //
      setIsSubmitting(false);
      setDialogState({
        isShow: true,
        message: 'Please try again',
        title: 'Error',
      });

      captureException(e);
    }
  };

  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    window.submitValidatedForm = (token: string) => {
      if (token) {
        submitForm(token);
      }
    };
  }

  return (
    <div className="w-full max-w-lg px-2 py-12 mx-auto xs:px-4">
      <div className="max-w-sm mx-auto mt-8 mb-4">
        <form onSubmit={handleSubmit(() => window.grecaptcha.execute())}>
          <div className="relative grid grid-cols-2 gap-x-4">
            <div>
              <Input
                classes="mb-12"
                error={errors.firstName && errors.firstName.message}
                label="First Name"
                name="firstName"
                register={register}
                requiredText="Required"
                size="lg"
              />
            </div>
            <div>
              <Input
                classes="mb-12"
                error={errors.lastName && errors.lastName.message}
                label="Last Name"
                name="lastName"
                register={register}
                requiredText="Required"
                size="lg"
              />
            </div>
          </div>

          <div className="relative">
            <Input
              classes="mb-12"
              error={errors.phone && errors.phone.message}
              label="Phone (Country code and numbers only)"
              name="phone"
              patternText="Please provide a valid phone number"
              patternValue={/^-?[0-9]\d*\.?\d*$/i}
              placeholder="6512341234"
              register={register}
              // requiredText="Your phone number is required"
              size="lg"
            />
          </div>

          <div className="relative">
            <Input
              classes="mb-12"
              error={errors.email && errors.email.message}
              label="Email"
              name="email"
              patternText="Please provide a valid email address"
              patternValue={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
              register={register}
              requiredText="Required"
              size="lg"
            />
          </div>

          <div className="relative">
            <Input
              classes="mb-12"
              error={errors.subject && errors.subject.message}
              label="Subject"
              name="subject"
              register={register}
              requiredText="Please provide subject"
              size="lg"
            />
          </div>

          <div className="relative">
            <TextArea
              classes="mb-12"
              error={errors.message && errors.message.message}
              label="Your message"
              name="message"
              register={register}
              requiredText="Your message is required"
              variant="outline"
            />
          </div>

          <div className="relative px-2 mb-6 sm:px-0">
            <Checkbox
              control={control}
              error={Boolean(errors.agree)}
              label={checkboxLabel}
              name="agree"
              requiredText={checkboxLabel}
              value={watch('agree')}
            />
          </div>

          <div
            className={
              process.env.GATSBY_ENV === 'development' ? '' : 'sr-only'
            }
            id="g-recaptcha"
          ></div>

          <div className="px-2 sm:px-0">
            <LightMode>
              <Button
                isFullWidth
                disabled={isSubmitDisabled}
                isLoading={isSubmitting}
                loadingText="Submitting"
                size="lg"
                type="submit"
              >
                Send message
              </Button>
            </LightMode>
          </div>
        </form>
      </div>
    </div>
  );
};

const states = (state: RootState) => ({
  isRecaptchaLoaded: state.scripts.isRecaptchaLoaded,
});

const dispatch = {
  setDialogState: setDialogStateAction,
  setRecaptcha: setRecaptchaAction,
};

export const Form = connect(states, dispatch)(Component);
