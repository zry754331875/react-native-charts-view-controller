//
//  ViewController.m
//  Demo
//
//  Created by 黑暗骑士 on 2018/11/29.
//  Copyright © 2018 zry. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://127.0.0.1:8081/index.bundle?platform=ios"];
    
    NSURL *jsonURL = [NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"DemoProps" ofType:@"json"]];
    
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:[NSData dataWithContentsOfURL:jsonURL] options:NSJSONReadingMutableContainers error:nil];
    
    NSLog(@"%@",dic);
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"ChartListViewController"
                         initialProperties:dic
                             launchOptions: nil];
    
    self.view = rootView;
}


@end
