import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Example00SimpleLambdaTracing from '../lib/example00_simple_lambda_tracing-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Example00SimpleLambdaTracing.Example00SimpleLambdaTracingStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
