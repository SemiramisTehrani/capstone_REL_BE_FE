
export function SendEmail(email, recipient_name, message) {
    return fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        service_id: 'service_n4kyn9j',
        template_id: 'template_eyvh5rn',
        user_id: 'RmNgCopFUrZDWiDmP',
        template_params: {
          email: email,
          to_name: recipient_name,
          message: message
        }
      })
    })
  }