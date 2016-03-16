/**
 * JBoss, Home of Professional Open Source Copyright 2016, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the
 * 
 * @authors tag. See the copyright.txt in the distribution for a full listing of individual contributors.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by
 * applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

function invoke_ajax(url, id) {
    $.ajax({
        url : url,
        cache : false,
        success : function(data) {
            $('#' + id).text(data);
        },
        error : function(error) {
            $('#' + id).text('Error getting value from service ' + url);
        }
    });
}

function browser_query() {
    var services = [
            {
                'url' : 'http://hola-helloworld-msa.rhel-cdk.10.3.2.2.xip.io/rest/hola',
                'id' : 'hola-service'
            },
            {
                'url' : 'http://bonjour-helloworld-msa.rhel-cdk.10.3.2.2.xip.io/bonjour',
                'id' : 'bonjour-service'
            },
            {
                'url' : 'http://hello-helloworld-msa.rhel-cdk.10.3.2.2.xip.io/rest/hello',
                'id' : 'hello-service'
            },
            {
                'url' : 'http://aloha-helloworld-msa.rhel-cdk.10.3.2.2.xip.io/aloha',
                'id' : 'aloha-service'
            },
            {
                'url' : 'http://ola-helloworld-msa.rhel-cdk.10.3.2.2.xip.io/ola',
                'id' : 'ola-service'
            }, ];

    for (var x = 0; x < services.length; x++) {
        invoke_ajax(services[x].url, services[x].id)
    }
};

$(document).ready(function() {
    browser_query();
});
