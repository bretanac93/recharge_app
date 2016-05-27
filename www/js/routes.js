angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('recargas', {
      url: '/index',
      templateUrl: 'templates/recargas.html'
    })
        
      
    
      
    .state('tabsController', {
      url: '/page2',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })
        
      
    
      
        
    .state('tabsController.acercaDeNosotros', {
      url: '/about',
      views: {
        'tab1': {
          templateUrl: 'templates/acercaDeNosotros.html'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.contactenos', {
      url: '/contact',
      views: {
        'tab3': {
          templateUrl: 'templates/contactenos.html'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  

  

});