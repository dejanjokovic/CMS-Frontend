export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Front Office',
      url: '/frontoffice/prospectus_sale',
      icon: 'icon-list',
      children: [
        {
          name: 'Prospectus Sale',
          url: '/frontoffice/prospectus_sale',
          icon: '',
        },
        {
          name: 'Visitors',
          url: '/frontoffice/visitors',
          icon: '',
        },
        {
          name: 'Calls',
          url: '/frontoffice/calls',
          icon: '',
        },
        {
          name: 'General Enquiry',
          url: '/frontoffice/general_enquiry',
          icon: '',
        },
        {
          name: 'Courier Service',
          url: '/frontoffice/courier_send',
          icon: '',
          children:[
            {
              name: 'Courier Send',
              url: '/frontoffice/courier_send',
              icon: '',
            },             
            {
              name: 'Courier Received',
              url: '/frontoffice/courier_received',
              icon: '',
            },             
          ]
        },
        {
          name: 'Calendar Planning',
          url: '/frontoffice/calendar_planning',
          icon: '',
        },
      ]
    },
    {
      name: 'Staff',
      url: '/stuff',
      icon: 'icon-user',
      children: [
        {
          name: 'Registration',
          url: '/staff/registration',
          icon: '',
        },
        {
          name: 'Manage Attendance',
          url: '/staff/manage_attendance',
          icon: '',
        },
        {
          name: 'Monthwise Attendance Report',
          url: '/staff/report',
          icon: '',
        },
        {
          name: 'Staff Relieving',
          url: '/staff/relieving',
          icon: '',
        },
        {
          name: 'Staff Relieving Report',
          url: '/staff/relieving_report',
          icon: '',
        },
        {
          name: 'Staff Payroll Management',
          url: '/staff/payroll',
          icon: '',
        },
      ]
    },
    {
      name: 'Student',
      url: '/student',
      icon: 'icon-people',
      children: [
        {
          name: 'Admit Student', //add student 
          url: '/student/admit',
          icon: '',
        },
        {
          name: 'Application',
          url: '/student/application',
          icon: '',
          children:[
            {
              name: "Application Form",
              url: '/student/application/form',
              icon:'',
            },
            {
              name: "Student details",
              url: '/student/application/details',
              icon:'',
            },
            {
              name: "Course Wise Rank List",
              url: '/student/application/ranklist',
              icon:'',
            }
          ]
        },
        {
          name: 'Student Information',
          url: '/student/information',
          icon: '',
          children:[
            {
              name: "B.Com with CA (0)",
              url: '/student/information/',
              icon:''
            },
            {
              name: "B.Com with CA (0)",
              url: '/student/information/',
              icon:''
            },
            {
              name: "B.Com with CA (0)",
              url: '/student/information/',
              icon:''
            },
            {
              name: "B.Com with CA (0)",
              url: '/student/information/',
              icon:''
            },
            {
               name: "B.Com with CA (0)",
              url: '/student/information/',
              icon:''
            }
          ]
        },
        {
          name: 'Attendance',
          url: '/student/attendance',
          icon: '',
          children:[
            {
              name: 'Manage Attendance',
              url:'/student/attendance/manage',
              icon: '',
            },
            {
              name: 'Bulk Report',
              url:'/student/attendance/bulk_report',
              icon: '',
            },
            {
              name: 'Individual Report',
              url:'/student/attendance/ind_report',
              icon: '',
            },
          ]
        },
        {
          name: 'Student Daily Report',
          url: '/student/daily_report',
          icon: '',
        },
        {
          name: 'Student Discipline',
          url: '/student/discipline',
          icon: '',
        },
        {
          name: 'Student Promotion',
          url: '/student/promotion',
          icon: '',
        },
        {
          name: 'Manage TC Generation',
          url: '/student/tc_generation',
          icon: '',
        },

      ]
    },
    {
      name: 'Department',
      url: '/department',
      icon: 'icon-vector',
      children:[
        {
          name:'Department Details',
          url: '/department/details',
          icon:'',
        },
        {
          name:'Fees',
          url: '/department/fees',
          icon:'',
        },
        {
          name:'Course',
          url: '/department/course',
          icon:'',
        },
        {
          name:'Subject',
          url: '/department/subject',
          icon:'',
        },
      ]
    },
    {
      name: 'Daybook Account',
      url: '/daybook_account',
      icon: 'icon-book-open',
      children:[
        {
          name: 'Expense',
          url: '/daybook_account/expense',
          icon:'',
        },
        {
          name: 'Finance Report',
          url: '/daybook_account/finance_report',
          icon:'',
        }
      ]
    },
    {
      name: 'Examination',
      url: '/exam',
      icon: 'icon-note',
      children:[
        {
          name:'Exam Grades',
          url:'/exam/grades',
          icon:'',
        },
        {
          name:'Mark Entry',
          url:'/exam/mark_entry',
          icon:'',
        },
        {
          name:'Student Internal Report',
          url:'/exam/internal_report',
          icon:'',
        },
        {
          name:'Student Overall Internal Report',
          url:'/exam/overall_internal_report',
          icon:'',
        },
        {
          name:'Classwise Consolidated Report',
          url:'/exam/classwise_report',
          icon:'',
        },        
        {
          name:'Subject Wise Report',
          url:'/exam/subject_report',
          icon:'',
        },

      ]
    },
    {
      name: 'Transport',
      url: '/transport',
      icon: 'fa-bus',
      children:[
        {
          name:'Routes',
          url:'/exam/routes',
          icon:'',
        },
        {
          name:'Vehicles',
          url:'/exam/vehicles',
          icon:'',
        },
        {
          name:'Vehicle Allotment',
          url:'/exam/vehicle_allotment',
          icon:'',
        },
        {
          name:'Fee Collection',
          url:'/exam/fee_collection',
          icon:'',
        },
      ]
    },
    {
      name: 'Fee',
      url: '/fee',
      icon: 'icon-wallet',
      children:[
        {
          name:"Fee Payment",
          url: '/fee/payments',
          icon: '',
        },
        {
          name:"Fee Report",
          url: '/fee/report',
          icon: '',
        }
      ]
    },
    {
      name: 'Alumni',
      url: '/alumni',
      icon: 'icon-people',
    },
    {
      name: 'SMS',
      url: '/sms',
      icon: 'icon-people',
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people',
    },
    {
      name: 'Accounts',
      url: '/accounts',
      icon: 'icon-lock',
    },
  ],
};
